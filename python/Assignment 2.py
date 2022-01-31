import matplotlib.pyplot as plt
import pandas as pd

carData = pd.read_csv("cars-sample.csv")

col_list = ["Weight","MPG", "Manufacturer"]

data = pd.read_csv("cars-sample.csv", usecols=col_list)

colors = {'bmw':'#dd8f88','ford':'#9aa62b','honda':'#0ebe8c','mercedes':'#5988d4','toyota':'#ff4de4'}
plt.scatter(carData["Weight"], carData["MPG"], s= data["Weight"]/50, c=data['Manufacturer'].map(colors), alpha=.5)

plt.xlabel("Weight")
plt.ylabel("MPG")
plt.title("MPG vs Weight Comparison")
plt.grid()

plt.show()


