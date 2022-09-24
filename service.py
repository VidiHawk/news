# This service will run once per day at 8pm local time and scrape
# the 20 top articles of each news website.


# pip3 install newspaper3k to get a list of all articles on the homepage of a newspaper
from newspaper import build
from newspaper import Article
from textblob import TextBlob
import nltk

nltk.download("punkt")
from wordcloud import WordCloud, STOPWORDS
from datetime import datetime
import schedule
import time

irish_news = {
    "The Independent": "https://www.independent.ie/",
    "RTE": "https://www.rte.ie/",
    "The Irish Time": "https://www.irishtimes.com/",
    "The Irish Mirror": "https://www.irishmirror.ie/",
    "The BBC": "https://www.bbc.com/",
    "The Daily Mail": "https://www.dailymail.co.uk/",
    "The Sun": "https://www.thesun.ie/",
    "The Guardian": "https://www.theguardian.com/",
    "The Irish Examiner": "https://www.irishexaminer.com/",
    "The Journal": "https://www.thejournal.ie/",
}


date = datetime.today().strftime("%Y-%m-%d")
data = []
urls_set = set()

###################################################################################
# Get 20 most important articles
###################################################################################


def ireland():
    print("\nI'm working...")

    for key, value in irish_news.items():
        news_outlet = key
        print("\nnewspaper: ", news_outlet)
        articles = []
        independent_articles = build(value, memoize_articles=False)
        for article in independent_articles.articles:
            # check to see if the article url doesn't already exist in the list
            # and that the url doesn't lead to a video
            if article.url not in urls_set:
                urls_set.add(article.url)
                articles.append(article.url)
            if len(articles) == 20:
                break

        ### Retrieve metadata and text for each article ###

        for i in articles:
            my_article = Article(i, language="en")
            my_article.download()
            my_article.parse()
            my_article.nlp()

            url = i
            title = my_article.title
            text = TextBlob(my_article.text)
            keywords = my_article.keywords

            ### Perform sentiment analysis ###
            # Subjectivity is the output that lies within [0,1] and refers to personal opinions and judgments.
            # Polarity is the output that lies between [-1,1], where -1 refers to negative sentiment and +1 refers to positive sentiment.

            polarity = text.sentiment.polarity
            subjectivity = text.sentiment.subjectivity

            # print("\nurl: ", url)
            print("title: ", title)
            # print("\nkeywords: ", keywords)
            # print("\npolarity: ", polarity)
            # print("\nsubjectivity: ", subjectivity)
            # print("\nsummary: ", my_article.summary)

            data.append(
                [date, news_outlet, url, title, text, keywords, polarity, subjectivity]
            )

        print("\ntime: ", datetime.now())
        print("\nnumber of articles in the database: ", len(data))
    return


# schedule.every().day.at("21:00").do(ireland)
schedule.every(1).minutes.do(ireland)

while True:
    schedule.run_pending()
    time.sleep(60)  # wait one minute


# run it with nohup, e.g.: nohup python3 service.py &
# Don't forget to start it again if you reboot.
