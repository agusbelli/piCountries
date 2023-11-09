import styles from "./paginado.module.css"

const Paginado = ({countriesPerPage, allCountries, paginado}) => {
    const pageNumbers = [];
        
    for (let i = 1; i<=Math.ceil(allCountries/countriesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className={styles.container}>
          <nav className={styles.nav}>
            <ul>
              {pageNumbers &&
                pageNumbers.map((number, index) => (
                  <li key={index}>
                    <a onClick={() => paginado(number)}>{number}</a>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      );
    };

export default Paginado;