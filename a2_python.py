import numpy as np
import pandas as pd
import matplotlib.cm as cm
import matplotlib.pyplot as plt

data = pd.read_csv("cars-sample.csv")

manu_color = []
for x in data['Manufacturer']:
  if x == 'ford':
    manu_color.append(1)
  elif x == 'toyota':
    manu_color.append(2)
  elif x == 'bmw':
    manu_color.append(3)
  elif x == 'honda':
    manu_color.append(4)
  elif x == 'mercedes':
    manu_color.append(5)


plt.scatter(x = data['Weight'], y = data['MPG'], c = manu_color, cmap = 'spring', alpha = 0.5, s = data['Weight']*0.05)

#assigning tick ranges and increments
plt.xticks(np.arange(2000, 5001, step=1000))
plt.yticks(np.arange(10, 41, step=10))
plt.xlabel('Weight')
plt.ylabel('MPG')
plt.minorticks_on
plt.grid(which='both', axis='both')

plt.show()
