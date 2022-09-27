from newspaper import build
from newspaper import Article
from textblob import TextBlob
import nltk
from wordcloud import WordCloud, STOPWORDS
from datetime import datetime
import schedule
import time

nltk.download("punkt")

fave_news = [
    {
        "outlet": "The Wall Street Journal",
        "url": "https://www.wsj.com/",
        "slugs": ["blabla"],
        "bad_urls": ["blabla"],
    },
    {
        "outlet": "The Financial Times",
        "url": "https://www.ft.com/",
        "slugs": ["blabla"],
        "bad_urls": ["blabla"],
    },
    {
        "outlet": "Le Monde",
        "url": "https://www.lemonde.fr/",
        "slugs": ["blabla"],
        "bad_urls": ["blabla"],
    },
    {
        "outlet": "The China Daily",
        "url": "https://www.chinadaily.com.cn/",
        "slugs": ["blabla"],
        "bad_urls": ["blabla"],
    },
]


date = datetime.today().strftime("%Y-%m-%d")
data = []
urls_set = set()
bad_urls = []


def crawl():
    print("\nI'm working...")

    for item in fave_news:
        news_outlet = item["outlet"]
        print("\nnewspaper: ", news_outlet)
        articles = []
        paper_articles = build(
            item["url"], memoize_articles=False, fetch_images=False, MIN_WORD_COUNT=400
        )
        for article in paper_articles.articles:
            # check to see if the article url doesn't already exist in the list
            if article.url not in urls_set:
                # and that the url is not in the bad_urls list
                if article.url not in item["bad_urls"]:
                    # and that the url doesn't lead to a video or a comment section
                    if any(slug in article.url for slug in item["slugs"]):
                        bad_urls.append(article.url)
                    else:
                        urls_set.add(article.url)
                        articles.append(article.url)
                else:
                    bad_urls.append(article.url)
            if len(articles) == 3:
                break

        ### Retrieve metadata and text for each article ###

        for i in articles:
            my_article = Article(i, language="en")

            try:
                my_article.download()
                my_article.parse()
                my_article.nlp()
            except:
                print("\narticle failed to download")
                print(i)
                continue

            url = i
            title = my_article.title
            text = TextBlob(my_article.text)
            keywords = my_article.keywords

            """
            Subjectivity is the output that lies within [0,1] and refers to personal opinions and judgments.
            Polarity is the output that lies between [-1,1], where -1 refers to negative sentiment and +1 refers to positive sentiment.
            """
            polarity = text.sentiment.polarity
            subjectivity = text.sentiment.subjectivity

            print("\ntitle: ", title)
            print("url: ", url)
            # print("\nkeywords: ", keywords)
            # print("\npolarity: ", polarity)
            # print("\nsubjectivity: ", subjectivity)
            # print("\nsummary: ", my_article.summary)

            data.append(
                [date, news_outlet, url, title, text, keywords, polarity, subjectivity]
            )

        print("\ntime: ", datetime.now())
        print("\nnumber of articles in the database: ", len(data))
        print("\nbad urls:")
        for i in bad_urls:
            print(i)
    return


# schedule.every().day.at("21:00").do(crawl)
# schedule.every(1).minutes.do(crawl)

# while True:
#     schedule.run_pending()
#     time.sleep(60)  # wait one minute

crawl()
