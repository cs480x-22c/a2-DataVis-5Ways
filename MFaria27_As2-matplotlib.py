import matplotlib.pyplot as plt
import matplotlib.patches as ptch
from matplotlib.lines import Line2D
import pandas as pd

carData = pd.read_csv('C:/Users/Mattheus Faria/Desktop/R Data/cars-sample.csv')

manus = carData['Manufacturer']
col = {'bmw':'#EBAC9A',
       'ford' : '#B6B74A',
       'honda':'#8FD5B7',
       'mercedes':'#92D3F4',
       'toyota':'#EAAEEF'}

plt.scatter(
        carData['Weight'],
        carData['MPG'],
        alpha = 0.5,
        s=carData['Weight']/20,
        c=carData['Manufacturer'].map(col)
)

plt.xlabel("Weight")
plt.locator_params(axis='x', nbins=4)
plt.locator_params(axis='y', nbins=4)
plt.ylabel("MPG")
plt.grid()

bmw = ptch.Patch(color = col['bmw'], label = 'bmw')
ford = ptch.Patch(color = col['ford'], label = 'ford')
honda = ptch.Patch(color = col['honda'], label = 'honda')
mercedes = ptch.Patch(color = col['mercedes'], label = 'mercedes')
toyota = ptch.Patch(color = col['toyota'], label = 'toyota')
legend1 = plt.legend(title = "Manufacturer", handles = [bmw, ford, honda, mercedes, toyota], loc=1)

weights = [Line2D([0],[0], marker='o', markersize = 10, label='2000'),
           Line2D([0],[0], marker='o', markersize = 13, label='3000'),
           Line2D([0],[0], marker='o', markersize = 15, label='4000')]
legend2 = plt.legend(title="Weight", handles=weights, loc=5)

plt.gca().add_artist(legend1)
plt.show()
