# -*- coding: utf-8 -*-
"""
Created on Sun Jan 30 15:24:16 2022

@author: balle
"""


import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import matplotlib.patches as mpatches

df = pd.read_csv('cars-sample.csv')

pos = [2,3]

# use a gray background
ax = plt.axes(facecolor='#E6E6E6')
ax.set_axisbelow(True)

df.drop(df.index[pos], inplace=True) #Removing the nan MPG data rows

sizeArr = []
df['size'] = 1
df.loc[df['Weight'] < 2000  , 'size'] = 20
df.loc[(df['Weight'] >=2000)  , 'size'] = 90
df.loc[(df['Weight'] >=3000)  , 'size'] = 200
df.loc[(df['Weight'] >=4000)  , 'size'] = 500
colors = {'ford':'green', 'toyota':'pink', 'bmw':'orange', 'honda':'#7FFFD4', 'mercedes':'blue'}

ford = mpatches.Patch(color='green', label='ford')
toyota = mpatches.Patch(color='pink', label='toyota')
bmw = mpatches.Patch(color='orange', label='bmw')
honda = mpatches.Patch(color='#7FFFD4', label='honda')
mercedes = mpatches.Patch(color='blue', label='mercedes')

plot = plt.scatter(df['Weight'], df['MPG'], s=list(df['size']), c=df['Manufacturer'].map(colors), alpha=0.5)
plt.xlabel('Weight', weight = "bold")
plt.ylabel('MPG', weight = "bold")
plt.xticks(np.arange(2000, 6000, step=1000)) 
plt.yticks(np.arange(10, 50, step=10)) 



# draw solid white grid lines
plt.grid(color='w', linestyle='solid')



    
# hide top and right ticks
ax.xaxis.tick_bottom()
ax.yaxis.tick_left()

# lighten ticks and labels
ax.tick_params(colors='gray', direction='out')
for tick in ax.get_xticklabels():
    tick.set_color('gray')
for tick in ax.get_yticklabels():
    tick.set_color('gray')

plt.legend(handles=[ford, toyota, honda, mercedes])





