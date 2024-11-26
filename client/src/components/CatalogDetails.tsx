import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { artistType } from "../types/artistType";

function CatalogDetails() {
  const [catalog, setCatalog] = useState<artistType[]>([]);
  const { id } = useParams();

  const VITE_API_CATALOG_ID = import.meta.env.VITE_API_CATALOG_ID;

  useEffect(() => {
    fetch(`${VITE_API_CATALOG_ID}${id}`)
      .then((response) => response.json())
      .then((data) => setCatalog(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <h2 className="catalogDetailsTitle"> SELECTION D'ARTISTES </h2>
      <div className="catalogDetailsSection">
        {catalog.map((c) => (
          <div key={c.id}>
            <img className="catalogDetailsImage" src={c.picture} alt={c.name} />
            <p>{c.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CatalogDetails;
