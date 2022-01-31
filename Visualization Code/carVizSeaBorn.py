# -*- coding: utf-8 -*-
"""
Created on Sun Jan 30 22:34:00 2022

@author: balle
"""


import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import matplotlib.patches as mpatches
import seaborn as sns
df = pd.read_csv('cars-sample2.csv')


df['size'] = 1
df.loc[df['Weight'] < 2000  , 'size'] = 20
df.loc[(df['Weight'] >=2000)  , 'size'] = 90
df.loc[(df['Weight'] >=3000)  , 'size'] = 200
df.loc[(df['Weight'] >=4000)  , 'size'] = 800

scatter = sns.scatterplot(data=df,x="Weight", y="MPG", hue="Manufacturer", s=list(df['size']), alpha=0.5)
scatter.set_yticks([10,20,30,40])
scatter.set_xticks([2000,3000,4000,5000])