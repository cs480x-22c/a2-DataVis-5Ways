import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns

cars = pd.read_csv("cars-sample.csv")
colors = dict(bmw="#ed1c16", ford="#ffff66", honda="#31cb1b", mercedes="#17d4fc", toyota="#ED8AF8")

ax = sns.scatterplot(data=cars, x="Weight", y="MPG", linewidth=0,
                     size="Weight",  sizes=(70,300), hue="Manufacturer", palette=colors, alpha=0.5, legend='brief')

plt.title("Data on Various Cars")
plt.xlim([1500, 5050])
plt.ylim([8, 47])
plt.xticks(np.arange(2000, 6000, 1000), fontweight='bold')
plt.yticks(np.arange(10, 50, 10), fontweight='bold')
plt.xlabel("Weight", fontweight='bold')
plt.ylabel("MPG", fontweight='bold')
plt.grid(color='grey')
plt.legend(loc='center left', bbox_to_anchor=(1, 0.5))
ax.set_facecolor("#666666")


plt.savefig("figure.png",  bbox_inches='tight')
