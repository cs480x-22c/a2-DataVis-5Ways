import pandas as pd
from matplotlib import pyplot as plt

plt.style.use('seaborn')
data = pd.read_csv('./cars-sample.csv')

weight = data['Weight']
mpg = data['MPG']
["bmw", "ford", "honda", 'mercedes', 'toyota' ]

colors = []

for m in data['Manufacturer']:
    if(m == 'bmw'):
        colors.append(1)
    elif(m == 'ford'):
        colors.append(2)
    elif(m == 'honda'):
        colors.append(3)
    elif(m == 'mercedes'):
        colors.append(4)
    elif(m == 'toyota'):
        colors.append(5)

plt.scatter(weight, mpg, s=weight/20, c=colors, cmap='hsv', alpha=0.5)
plt.tight_layout()

plt.xlabel('Weight')
plt.ylabel('MPG')


plt.locator_params(axis="x", nbins=4)
plt.locator_params(axis="y", nbins=4)

plt.show()







