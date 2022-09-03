import Navigation from './navigation';
import Footer from './footer';


export default function layout({ children }) {
  return (
    <div>
    <Navigation />
        {children}
    <Footer />
    </div>
  );
}