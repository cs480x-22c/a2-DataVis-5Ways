import matplotlib.pyplot as plt
import pandas as pd
fig, ax = plt.subplots(figsize=(10,6))

#used https://stackabuse.com/matplotlib-scatterplot-tutorial-and-examples/
# and https://matplotlib.org/3.1.0/gallery/lines_bars_and_markers/scatter_with_legend.html for help
df = pd.read_csv('cars-sample.csv')
colors = {'bmw': 'lightblue', 'ford': 'red', 'honda': 'green', 'mercedes': 'orange', 'toyota': 'darkblue'}

scatter = plt.scatter("Weight", "MPG", s=(df["Weight"]/20), data=df, c=df["Manufacturer"].map(colors), alpha=0.5)
plt.title('Cars Sample')
plt.xlabel("Weight (lbs)")
plt.xlim([2000,5000])
plt.ylim([10,40])
plt.ylabel("MPG")

# handles1, labels1 = scatter.legend_elements(prop="colors", alpha=0.5)
# colorsLegend = ax.legend(handles1, labels1, loc="upper right", title="Manufacturer")
# ax.add_artist(colorsLegend)

handles2, labels2 = scatter.legend_elements(prop="sizes", alpha=0.5)
sizesLegend = ax.legend(handles2, labels2, loc="lower right", title="Weight/20 lbs")
ax.add_artist(sizesLegend)

#print
plt.show()