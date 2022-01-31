#%%

import pandas as pd
import matplotlib.pyplot as plt
from pathlib import Path

data = pd.read_csv(Path("C:\\Users\\Sean\\Desktop\\Data Vis\\a2-DataVis-5Ways-main\\cars-sample.csv"))

colors = {"bmw":"red", "ford":"blue", "honda":"green", "mercedes":"yellow", "toyota":"purple"}

graph = plt.scatter("Weight", "MPG", data = data, s = data["Weight"]/25, alpha = .5, c = data["Manufacturer"].map(colors))

plt.title("Weight vs MPG")
plt.xlabel("Weight")
plt.ylabel("MPG")

plt.show

# %%
