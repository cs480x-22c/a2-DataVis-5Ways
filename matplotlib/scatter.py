"""
============
CARS
============

CARS.....
"""
import numpy as np
import matplotlib.pyplot as plt
import pandas
fig, ax = plt.subplots()
#import csv nah i just learned i like pandas
#with open('cars-sample.csv', newline='') as csvfile:
#    reader = csv.DictReader(csvfile)
#    for row in reader:
#        print(row['manufacturer'], row['mpg'])

df = pandas.read_csv('cars-sample.csv')
colors = {'bmw':'crimson', 'ford':'goldenrod', 'honda':'mediumseagreen', 'mercedes':'deepskyblue', 'toyota':'orchid'}
#I stole this color solution thing from jbiss4 on github. I was stumped and I saw how they did it so elegantly (or at least it seems elegant. it's my first time working with python.) and I was like, well, I'll make the colors pretty or whatever and call it.

scatter = plt.scatter("Weight", "MPG", s=(df["Weight"]/10), data=df, c=df["Manufacturer"].map(colors), alpha=0.5)
plt.xlabel("Weight (lbs)")
plt.ylabel("Miles per Gallon")
# produce a legend with the unique colors from the scatter
# stolen from https://matplotlib.org/stable/gallery/lines_bars_and_markers/scatter_with_legend.html
handles, labels = scatter.legend_elements(prop="colors", alpha=0.5)
legend1 = ax.legend(handles, labels, loc="lower left", title="Manufacturer")
ax.add_artist(legend1)

# produce a legend with a cross section of sizes from the scatter
handles, labels = scatter.legend_elements(prop="sizes", alpha=0.5)
legend2 = ax.legend(handles, labels, loc="upper right", title="Weights (lbs/10)")
#print
plt.show()
#stolen from example documentation https://matplotlib.org/stable/gallery/shapes_and_collections/scatter.html
#############################################################################
#
# .. admonition:: References
#
#    The use of the following functions, methods, classes and modules is shown
#    in this example:
#
#    - `matplotlib.axes.Axes.scatter` / `matplotlib.pyplot.scatter`
