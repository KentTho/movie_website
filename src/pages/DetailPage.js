import React from "react";
import { useParams, Link } from "react-router-dom";
import { movies } from "../data/movies";

const styles = {
  wrapper: {
     backgroundImage: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        color: "#f1f1f1",
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
  },
  container: {
    maxWidth: "900px",
    width: "100%",
    backgroundColor: "#1e1e1e",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 0 20px rgba(0,0,0,0.5)",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  poster: {
    flex: "1 1 300px",
    maxWidth: "300px",
    height: "100%",
  },
  posterImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  content: {
    flex: "2 1 400px",
    padding: "30px",
  },
  title: {
    fontSize: "32px",
    marginBottom: "15px",
  },
  detail: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  desc: {
    fontSize: "16px",
    color: "#ccc",
    marginTop: "20px",
    lineHeight: "1.6",
  },
  backBtn: {
    display: "inline-block",
    marginTop: "30px",
    backgroundColor: "#e50914",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "0.3s",
  },
  backBtnHover: {
    backgroundColor: "#b00610",
  },
  notFound: {
    color: "red",
    fontSize: "28px",
    textAlign: "center",
    marginTop: "100px",
  },
};

const DetailPage = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return <h2 style={styles.notFound}>404 - Phim không tồn tại</h2>;
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.poster}>
          <img src={movie.image} alt={movie.title} style={styles.posterImg} />
        </div>
        <div style={styles.content}>
          <h1 style={styles.title}>{movie.title}</h1>
          <p style={styles.detail}><strong>Đạo diễn:</strong> {movie.director}</p>
          <p style={styles.detail}><strong>Năm phát hành:</strong> {movie.year}</p>
          <p style={styles.desc}>{movie.fullDesc}</p>
          <Link
            to="/"
            style={styles.backBtn}
            onMouseOver={(e) => e.target.style.backgroundColor = styles.backBtnHover.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = styles.backBtn.backgroundColor}
          >
            ← Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
