import pandas as pd
import plotly.express as px
import numpy as np

data = pd.read_csv('cars-sample.csv', sep=',')

fig = px.scatter(data, x='Weight', y='MPG', color='Manufacturer', color_discrete_sequence=['#f78781', '#c1c261', '#59d4a9', '#59c4f0', '#ec8ef5'], opacity=0.5, size='Weight', hover_name='Car')
fig.update_layout(
    xaxis=dict(
        tickmode='linear',
        tick0=1000,
        dtick=1000
    ),

    yaxis=dict(
        tickmode='linear',
        tick0=10,
        dtick=10
    )
)
fig.show()
