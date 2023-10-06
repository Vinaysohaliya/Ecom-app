import connectToDatabase from './auth/db/user.db';
import Product from './backend/product.model';

connectToDatabase();

export default async (req, res) => {
    const { category, subcategory, sortBy } = req.query;
    console.log(category,subcategory,sortBy);
    let sortOption = {};
    console.log(sortBy);

    if (req.method === 'GET') {
        try {
            let query = { category };

            if (subcategory && subcategory !== 'All') {
                query.subcategory = subcategory;
            }


            if (sortBy === 'asc') {
                sortOption = { price: 1 };
            } else if (sortBy === 'desc') {
                sortOption = { price: -1 };
            }

            const result = await Product.find(query).sort(sortOption).exec();

            console.log(result);
            res.status(200).json(result);
        } catch (error) {
            console.error('Error fetching data:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};
