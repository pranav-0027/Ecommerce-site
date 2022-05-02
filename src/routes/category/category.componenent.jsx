import { useContext,useEffect,useState } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import './caregory.styles.scss'
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
    const {category} = useParams();
    const {categoriesMap } = useContext(CategoriesContext);
    const [products,setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    },[category, categoriesMap])

    return (
        <div className='category-container'>
        
                {/* the category map is fetched asynchronously SO when app is mounted it might
                  not be fetched and we're trying to set products still(in line 13) so we && products so that it runs only when products !=null*/}
            {
               products && products.map(product => <ProductCard key={product.id} product={product}/>) 
            }
        </div>
    )
}

export default Category;