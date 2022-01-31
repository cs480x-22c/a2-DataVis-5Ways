import matplotlib.pyplot as plt
plt.style.use('seaborn-whitegrid')
import numpy as np
import pandas as pd
data = pd.read_csv("cars-sample.csv")
x = data["Weight"]
y = data["MPG"]
size = x/10
colors = {'bmw':'red','ford': 'yellow','honda':'green','mercedes':'blue','toyota':'pink'}
plt.figure(figsize=(9,6))
#plt.scatter(x,y,marker="o", alpha=.5, s=size, c=data['Manufacturer'].astype('category').cat.codes)
plt.scatter(x,y,marker="o", alpha=.5, s=size, c=data['Manufacturer'].map(colors))
plt.xticks(np.arange(2000, max(x)+100, 1000))
plt.yticks(np.arange(10, max(y)+10, 10))
plt.xlabel('Weight')
plt.ylabel('MPG')
plt.show();