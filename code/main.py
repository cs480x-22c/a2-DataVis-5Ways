import matplotlib.pyplot as plt
import numpy as np

w = 4
h = 3
d = 280
cmap = plt.get_cmap('viridis')
plt.figure(figsize=(w, h), dpi=d)
iris_data = np.genfromtxt("cars-sample.csv", names=True, dtype="float", delimiter=",")
names = iris_data["Manufacturer"]
colors = cmap(np.linspace(0, 1, len(names)))

for i in range(iris_data.size):
    plt.plot(iris_data["Weight"][i], iris_data["MPG"][i], "o",
             markersize=(iris_data["Weight"][i]/1000), color=colors[i],
             label=iris_data["Manufacturer"][i],
             alpha=0.5)

plt.subplots_adjust(bottom=0.15, left=0.2)
plt.xlabel("Weight")
plt.ylabel("MPG")
plt.grid()
plt.savefig("out.png")
