import pandas
import numpy as np
import matplotlib as mpl
import matplotlib.pyplot as plt

data = pandas.read_csv('../cars-sample.csv')
colors = {
    'bmw': '#ff6d59',
    'ford': '#a9b956',
    'honda': '#5ae6a0',
    'mercedes': '#5fc0ed',
    'toyota': '#b94ec7',
  }
col_array = list(map(lambda x : colors[x], data.Manufacturer))

fig, ax = plt.subplots()
#ax.scatter()

plt.scatter(data.Weight, data.MPG, c=col_array, s=data.Weight * data.Weight/90000, alpha=0.5)
plt.xticks([2000, 3000, 4000, 5000])
plt.yticks([10, 20, 30, 40])


ax.set_xlabel('Weight', fontsize=15)
ax.set_ylabel('MPG', fontsize=15)
ax.grid(True)
plt.show()
