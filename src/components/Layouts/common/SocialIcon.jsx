
//funzione per i vari link 
export default function SocialIcon({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      className="p-2 bg-white rounded-xl shadow-md hover:scale-110 transition"
    >
      {children}
    </a>
  );
}

