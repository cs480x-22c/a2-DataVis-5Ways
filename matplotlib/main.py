
# Imports
from matplotlib import pyplot as plt
import csv

# Globals
csv_rows = []
color_dict = {
        "bmw":      "#f2b6b2",
        "ford":     "#c8c984",
        "honda":    "#8cd6b7",
        "mercedes": "#8ed1f4",
        "toyota":   "#eeb0f2"
}

# Functions
def get_data(csv_data):

    # Data Variables
    x = []
    y = []
    sizes = []
    colors = []

    # Extract Data
    for car in csv_data:
        if car[3] != "NA": # Don't include cars with no MPG
            x.append(float(car[7])) # Weight
            y.append(float(car[3])) # MPG
            sizes.append(100 * (float(car[7]) / 5000))
            colors.append(color_dict[car[2]]) # Use car manufacturer to determine colors

    return x, y, sizes, colors

# Main Code
# Open CSV
with open("../cars-sample.csv", "r") as file:
    csv_reader = csv.reader(file)
    next(csv_reader)
    for row in csv_reader:
        csv_rows.append(row)

x, y, sizes, colors = get_data(csv_rows)
plt.scatter(x, y, s=sizes, c=colors, alpha=0.5)
plt.xticks([2000, 3000, 4000, 5000])
plt.yticks([10, 20, 30, 40, 50])
plt.xlabel("Weight")
plt.ylabel("MPG")
plt.show()