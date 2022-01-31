import matplotlib
import matplotlib.pyplot as plt
import matplotlib.cbook as cbook
import numpy as np
import pandas as pd

car_data = pd.read_csv('cars-sample.csv')
cmap = plt.get_cmap('viridis')
colors = cmap(np.linspace(0, 1, len(car_data.Manufacturer)))
sp = matplotlib.pyplot.scatter(car_data.Weight, car_data.MPG, car_data.Weight/50, colors, None, None, None, None, None, 0.25)
plt.xlabel("Weight")
plt.ylabel("MPG")

plt.show()
