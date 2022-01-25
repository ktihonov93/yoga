import YogaKinds__Card from "./YogaKinds__Card"
import "./YogaKinds.css";

export default function YogaKinds() {
    return (
        <section className="yoga-kinds">
            <YogaKinds__Card src="https://i.ibb.co/DRGqLXS/image.jpg" kind="Хатха-йога" time1="Пн, Ср, Пт – с 12:00 до 15:00" time2="Вт, Чт – с 18:00 до 21:00" name={<span>Инструктор <br></br>
                Емельянова Полина</span>} />
            <YogaKinds__Card src="https://i.ibb.co/zRyWrQ4/image.jpg" kind="Ашатанга-йога" time1="Пн, Ср, Пт – с 11:00 до 14:00" time2="Вт, Чт – с 19:00 до 21:00" name={<span>Инструктор <br></br>
                Емельянова Полина</span>} />
            <YogaKinds__Card src="https://i.ibb.co/WPMvq8P/image-1.jpg" kind="Кундалини-йога" time1="Пн, Ср, Пт – с 12:00 до 15:00" time2="Вт, Чт – с 18:00 до 21:00" name={<span>Инструктор <br></br>
                Емельянова Полина</span>} />
        </section>
    );
}
