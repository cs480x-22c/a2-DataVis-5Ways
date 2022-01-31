import matplotlib.pyplot as plt
import pandas as pd


df = pd.DataFrame(pd.read_csv(r'cars-sample.csv'))

colors = {"bmw": "#f1aba6", "ford": "#c8c988", "honda": "#8dd7b7",
          "mercedes": "#8cd1f4", "toyota": "#eeb4f4"}
manufacturers = {"bmw", "ford", "honda", "mercedes", "toyota"}

plt.grid(color='w', linestyle='solid')
scatter.set_facecolor('#ebebeb')
scatter = plt.scatter(x=df.Weight, y=df.MPG, s=df.Weight/16, c=df.Manufacturer.map(colors),
                      label=df.Manufacturer, alpha=0.5)
plt.xlabel("Weight", fontweight='light')
plt.ylabel("MPG", fontweight='light')
plt.title("Cars Weight Vs MPG", fontweight='bold')
