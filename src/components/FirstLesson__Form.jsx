import './FirstLesson__Form.css';

export default function FirstLesson__Form() {
    return (
        <section className='firstLesson-form'>
            <h3>Запишитесь на бесплатное пробное занятие</h3>
            <form>
                <input type="text" id="Login" name="Login" placeholder='Ваше имя'></input><br></br>
                <input type="text" id="Number" name="Number" placeholder='Ваш телефон'></input><br></br>
            </form>
            <button>Оставить заявку</button>
        </section>
    )
}
