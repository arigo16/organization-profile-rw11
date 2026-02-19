import { beritaList, orgInfo } from "@/data/rw011";
import Link from "next/link";

const BlogSidebar = () => {
  const recentPosts = beritaList.slice(0, 4);

  const categories = [
    { name: "Musyawarah", count: 1 },
    { name: "Kegiatan", count: 1 },
    { name: "Kesehatan", count: 1 },
    { name: "Olahraga", count: 1 },
    { name: "Peringatan", count: 1 },
    { name: "Keagamaan", count: 1 },
  ];

  const tags = [
    "RW 011",
    "Warga",
    "Kegiatan",
    "Lingkungan",
    "Sosial",
    "Kesehatan",
    "Olahraga",
    "Ibadah",
  ];

  return (
    <div className="col-12 col-lg-4">
      <div className="main-sidebar">
        {/* Pencarian */}
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h3>Pencarian</h3>
          </div>
          <div className="search_widget">
            <form action="#">
              <input type="text" placeholder="Cari berita..." />
              <button type="submit">
                <i className="fal fa-search" />
              </button>
            </form>
          </div>
        </div>

        {/* Berita Terbaru */}
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h3>Berita Terbaru</h3>
          </div>
          <div className="popular-posts">
            {recentPosts.map((post, idx) => (
              <div key={idx} className="single-post-item">
                <div
                  className="thumb bg-cover"
                  style={{ backgroundImage: `url(${post.foto})` }}
                />
                <div className="post-content">
                  <h5>
                    <Link href="/news-details">{post.judul}</Link>
                  </h5>
                  <div className="post-date">
                    <i className="far fa-calendar-alt" /> {post.tanggal}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kategori */}
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h3>Kategori</h3>
          </div>
          <div className="widget_categories">
            <ul>
              {categories.map((cat, idx) => (
                <li key={idx}>
                  <Link href="/news">
                    {cat.name} <span>{cat.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Media Sosial */}
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h3>Media Sosial</h3>
          </div>
          <div className="social-link">
            <a
              href={orgInfo.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href={orgInfo.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href={orgInfo.socialMedia.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>

        {/* Tag Populer */}
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h3>Tag Populer</h3>
          </div>
          <div className="tagcloud">
            {tags.map((tag, idx) => (
              <Link key={idx} href="/news">
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
