import type { T_Product } from "@/lib/types";
import { Link } from "@tanstack/react-router";

const Card = ({ title, imageUrl, description, slug }: T_Product) => {
  return (
    <figure className="bg-app-surface rounded-xl shadow-md overflow-hidden flex flex-col w-full max-w-sm mx-auto">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover object-center bg-app-background"
      />
      <figcaption className="p-4 flex flex-col gap-2 justify-center md:flex-1">
        <p className="text-xl font-bold text-app-primary mb-1">{title}</p>
        <article className="text-gray-600 text-sm">{description}</article>
        <Link to="/products/$product" params={{ product: slug }}>
          <button className="hover:cursor-pointer mt-2 px-4 py-2 bg-green-gold text-white rounded bg-app-primary hover:bg-app-accent transition">
            Læs mere
          </button>
        </Link>
      </figcaption>
    </figure>
  );
};
export default Card;
