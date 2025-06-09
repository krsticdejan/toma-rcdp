import Button from "./components/Button";
import Image from "next/image";

export default function NotFound() {
    return (
        <section className="error-404 not-found">

            <div className="not-found__wrap container">
                <div className="not-found__text">
                    <div className="not-found__img">
                        <h1>4
                            <Image
                                src="rcdp-icon.svg"
                                alt=""
                                width={200}
                                height={200}
                            />
                            4</h1>
                    </div>
                </div>
                <div className="not-found__back">
                    <p>Stranica je na terapiji, <br />ali ti slobodno klikni nazad.</p>
                    <Button
                        link={'/'}
                        title={'nazad'}
                        target={'_self'}
                    />
                </div>


            </div>

        </section>
    );
}
