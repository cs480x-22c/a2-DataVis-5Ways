import matplotlib.pyplot as plt
import pandas as pd

df = pd.read_csv('../cars-sample.csv', index_col=0)
plt.style.use('ggplot')

def getColorForBrand(brand):
    if brand == 'bmw': 
        return "xkcd:orange"
    elif brand == 'ford': 
        return "xkcd:olive"
    elif brand == 'honda':
        return "xkcd:turquoise"
    elif brand == 'mercedes':
        return "xkcd:lightblue"
    elif brand == 'toyota':
        return "xkcd:fuchsia"

for make in sorted(df['Manufacturer'].unique()):
    plt.scatter(
    df[df['Manufacturer'] == make]['Weight'], 
    df[df['Manufacturer'] == make]['MPG'],
    c = getColorForBrand(make),
    s = (df[df['Manufacturer'] == make]['Weight']/500) ** 2, 
    label = make,
    alpha = 0.5
)
plt.legend()
plt.xlabel('Weight')
plt.ylabel('MPG')

plt.show()