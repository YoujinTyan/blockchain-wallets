import Header from '../../components/Header';
import './style.css';

export default function GeneralLayout({ children }) {
    return (
        <div className='general-layout'>
            <Header />
            {children}
        </div>
    );
};

