import matplotlib.pyplot as plt

import pandas as pd

width = 25
height = 25
d = 150

plt.figure(figsize=(width,height), dpi = d)
carData = pd.read_csv("cars-sample.csv")

col_list = ["Weight","MPG", "Manufacturer"]

data = pd.read_csv("cars-sample.csv", usecols=col_list)


plt.plot(carData["Weight"], carData["MPG"], "o")
plt.xlabel("Weight", fontsize = 24)
plt.ylabel("MPG", fontsize = 24)

plt.xticks(fontsize = 24)
plt.yticks(fontsize = 24)
plt.tick_params(axis='x', labelsize = 24)
colors = {'bmw':'red','ford':'yellow','honda':'green','mercedes':'blue','toyota':'purple'}
plt.scatter(carData["Weight"], carData["MPG"], s= data["Weight"], c=data['Manufacturer'].map(colors))

plt.savefig("Assignmnet2ScatterPlot.png")

