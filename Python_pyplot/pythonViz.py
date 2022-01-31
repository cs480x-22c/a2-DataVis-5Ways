import pandas as pd
import matplotlib.pyplot as plt
import mplcursors

# https://saralgyaan.com/posts/matplotlib-tutorial-in-python-chapter-6-scatter-plotting/

carData = pd.read_csv('cars-sample.csv')
manufacturer = carData['Manufacturer']
mpg = carData['MPG']
weight = carData['Weight']

# https://stackoverflow.com/questions/26139423/plot-different-color-for-different-categorical-levels-using-matplotlib
colors = {"bmw": "orange", "ford": "yellow", "honda": "green",
          "mercedes": "cyan", "toyota": "pink"}

plt.scatter(weight, mpg, alpha=0.5, s=weight/10, c=manufacturer.map(colors))
plt.xlabel("Weight")
plt.ylabel("MPG")

# https://stackoverflow.com/questions/7908636/how-to-add-hovering-annotations-in-matplotlib
mplcursors.cursor(hover=True)

plt.show()


