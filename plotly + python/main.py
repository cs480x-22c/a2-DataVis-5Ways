import pandas as pd
import plotly.express as px

df = pd.read_csv('../cars-sample.csv')
fig = px.scatter(df, x='Weight', y='MPG', size='Weight', color='Manufacturer', opacity=0.5, color_discrete_map = {
                    'ford': '#b5b64b',
                    'toyota': '#e9acee',
                    'bmw': '#f2acac',
                    'honda': '#8ed4b6',
                    'mercedes': '#8dcef0'
                })

fig.update_layout(
    xaxis = dict(
        tickmode = 'linear',
        tick0 = 2000,
        dtick = 1000
    ),
    yaxis = dict(
        tickmode = 'linear',
        tick0 = 10,
        dtick = 10
    )
)

fig.show()