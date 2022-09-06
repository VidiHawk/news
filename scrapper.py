import requests
import nltk
from bs4 import BeautifulSoup
import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import random
from wordcloud import WordCloud
import os
import spacy

# nlp = spacy.load("en_core_web_sm")
from textblob import TextBlob

# from pattern.en import sentiment


# pip3 install newspaper3k to get a list of all articles on the homepage of a newspaper
# from newspaper import build

# articles = []
# urls_set = set()
# independent_articles = build("https://www.independent.ie/", memoize_articles=False)
# for article in independent_articles.articles:
#     # check to see if the article url is not within the urls_set
#     if article.url not in urls_set:
#         # add the unique article url to the set
#         urls_set.add(article.url)
#         articles.append(article.url)


# print(len(articles))
# 246

r = requests.get(
    "https://www.independent.ie/irish-news/courts/man-charged-in-connection-with-murders-of-his-three-siblings-in-tallaght-41963620.html"
)
# r = requests.get(
#     "https://www.newsy.com/stories/commercial-companies-advance-space-exploration/"
# )

# Setting the correct text encoding of the HTML page
r.encoding = "utf-8"

# Extracting the HTML from the request object
html = r.text

# Printing the first 500 characters in html
# print(html[:5000])

# Creating a BeautifulSoup object from the HTML
soup = BeautifulSoup(html, features="lxml")
# Getting the text out of the soup
text = soup.get_text()

clean_text = text.replace("n", " ")
clean_text = clean_text.replace("/", " ")
clean_text = "".join([c for c in clean_text if c != "'"])


sentence = []
tokens = nlp(text)
for sent in tokens.sents:
    sentence.append((sent.text.strip()))

# total length
print(len(text))
# print(text[1500:3100])
print(sentence)
