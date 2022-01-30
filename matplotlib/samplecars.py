import matplotlib.pyplot as plt
import pandas as pd

## Read cars-sample csv and print head to make sure it loaded properly
data = pd.read_csv("cars-sample.csv")
print(data.head(5))

## Use colors dictionary to map brand to an accurate color (I could not find a simple, proper way to do this without the dictionary)
colors = {'bmw':'coral', 'ford':'yellowgreen', 'honda':'mediumspringgreen', 'mercedes':'deepskyblue', 'toyota':'violet'}

## Create the bubble plot and fix label names
graph = plt.scatter("Weight", "MPG",
                    alpha=0.5, data=data,
                    c=data["Manufacturer"].map(colors), s=(data["Weight"]/20))

plt.xlabel("Weight")
plt.ylabel("MPG")

##  Show the graph
plt.show()
