import matplotlib.pyplot as plt
import numpy as np

width = 4
height = 4
d = 300
plt.figure(figsize=(width, height), dpi=d)
cardata = np.genfromtxt(
    "cars-sample.csv", names=True,
    dtype="float", delimiter=",")

s = [n * 0.03 for n in cardata["Weight"]]


mansList = []
colors = ["blue","red","orange","green","violet"]


t = np.arange(97)


plt.scatter(cardata["Weight"], cardata["MPG"], s=s , alpha=0.5, c= t)

plt.xlabel('Weight')
plt.xticks([2000,3000,4000,5000])
plt.ylabel('MPG')
plt.yticks([10,20,30,40])
plt.savefig("out.png")
