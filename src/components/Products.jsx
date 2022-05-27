import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './product/Product'

const products = -[
    {id: 1, name: 'Plakat', descripton: 'Plakat rozmiaru a3, wykonany metoda xyz', price: '123pln' },
    {id: 2, name: 'Obraz', descripton: 'Płótno 2x3m, wykonany metoda xyz', price: '321pln'},
]

const Products = () => {
  return (
    <main>
        <Grid container justify="center" spacing = {3}>
            {products.map((product)=> (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={2}>
                    <Product/>
                </Grid>
            ))}
        </Grid>
    </main>
  );
}

export default Products;