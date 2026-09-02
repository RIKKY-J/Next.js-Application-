export const metadata = {
  title: 'About Us',
};
export default function About(){
    const random = Math.random();
    if (random < 0.5) {
        throw new Error('Something went wrong!');
    }
    return (
        <>
            <h1>About Us</h1>
            <p>Welcome to our about page!</p>
            <p>We are a team of passionate developers dedicated to creating innovative solutions for our clients. Our mission is to deliver high-quality software that meets the needs of our users.</p>
            <p>Our team consists of experienced professionals with expertise in various technologies and industries. We believe in continuous learning and staying up-to-date with the latest trends in software development.</p>
            <p>We value collaboration, transparency, and integrity in all our projects. We strive to build long-lasting relationships with our clients based on trust and mutual respect.</p>
            <p>Thank you for visiting our about page. If you have any questions or would like to learn more about our services, please feel free to reach out to us.</p>
        </>
    );
}