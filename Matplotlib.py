import pandas as pd
import matplotlib.pyplot as plt
from sklearn import preprocessing

data = pd.read_csv('cars-sample.csv')
#referenced https://www.geeksforgeeks.org/normalize-a-column-in-pandas/
x = data[['Weight']] 
min_max_scaler = preprocessing.MinMaxScaler()
x_scaled = min_max_scaler.fit_transform(x)
data['Bubble Size'] = (x_scaled * 250) + 10

colors = {
	'ford': "#a6445d",
	'toyota': "#021c41",
	'bmw': "#142f40",
	'honda': "#d89b65",
	'mercedes': "#bf835f"
}

data['Color'] = data['Manufacturer'].map(colors)

ax = data.plot.scatter(
	x='Weight',
	y='MPG',
	c='Color',
	s='Bubble Size',
	alpha=0.5)

fig = ax.get_figure()
#referenced https://stackoverflow.com/questions/31303912/matplotlib-pyplot-scatterplot-legend-from-color-dictionary

markers = [plt.Line2D([0],[0], color=color, marker='o', linestyle='', alpha=0.5) for color in colors.values()] 
plt.legend(markers, colors.keys(), title="Manufacturer")

fig.savefig('img/matplotlib.png')