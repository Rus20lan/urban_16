import style from './header.module.css';

const Header = (props) => {
  const {} = props;

  return (
    <div className={style.container}>
      <h1 className={style.headerH1}>To-Do List</h1>
    </div>
  );
};

export default Header;
