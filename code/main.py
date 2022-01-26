import matplotlib.pyplot as plt
import numpy as np

w = 4
h = 3
d = 280
cmap = plt.get_cmap('viridis')
plt.figure(figsize=(w, h), dpi=d)
data = np.genfromtxt("cars-sample.csv", names=True, dtype="float", delimiter=",")
names = data["Manufacturer"]
colors = cmap(np.linspace(0, 1, len(names)))

for i in range(data.size):
    plt.plot(data["MPG"][i], data["Weight"][i], "o",
             markersize=(data["Weight"][i]/1000).__round__(), color=colors[i],
             label=data["Manufacturer"][i])

plt.subplots_adjust(bottom=0.15, left=0.2)
plt.xlabel("Weight")
plt.ylabel("MPG")

plt.savefig("out.png")
