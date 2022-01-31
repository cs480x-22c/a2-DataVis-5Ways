#%%
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns


#using pandas
df  = pd.read_csv("cars-sample.csv")

#using pandas
colors = {"bmw": "#1b9e77",'ford': "#d95f02",'honda':"#7570b3",'mercedes': "#e7298a","toyota":"#66a61e"}
#using matplotlib

plt.scatter(df.Weight, df.MPG, s= df.Weight*0.009,alpha=0.5,c=df["Manufacturer"].map(colors))
plt.xlabel("Weight")
plt.ylabel("MPG")
plt.show()

#using seaborn
sns.scatterplot('Weight', 'MPG', data=df,size="Weight",hue='Manufacturer', alpha=0.5)


# %%
