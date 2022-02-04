import plotly.express as px
import pandas as pd

cardata = pd.read_csv("cars-sample.csv")

s = [n * 0.03 for n in cardata["Weight"]]

mansList = []

for man in cardata["Manufacturer"]:
    if man not in mansList:
        mansList.append(man)

colors = ["blue", "green", "orange", "yellow", "red", "indigo", "violet"]
colorMapping = []
for man in cardata["Manufacturer"]:
    colorMapping.append(colors[mansList.index(man)])

cardata['ManufacturerColorMapping'] = colorMapping

fig = px.scatter(cardata, x="Weight", y="MPG", size='Weight', color="ManufacturerColorMapping")
fig.update_layout(
    yaxis = dict(
        tickmode = 'array',
        tickvals = [10, 20, 30, 40]
    ),

    xaxis=dict(
        tickmode='array',
        tickvals=[2000, 3000, 4000, 5000]
    )
)

fig.show()
