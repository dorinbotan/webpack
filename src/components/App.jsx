import '../styles/index.scss'
import Recipes from './Recipes';

const App = () => {
    return (
        <>
            <section className='hero'></section>
            <main>
                <section>
                    <h1>Hello from react component!</h1>
                </section>

                <Recipes />
            </main>
        </>
    )
}

export default App;
