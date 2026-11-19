import styles from "./NavBox.module.css";
import logo from "../../../assets/logos/logosmall.webp";
import { Link, useSearchParams } from "react-router-dom";
import { useCategories } from "../hooks/useCategories";
import { useNavigate, useLocation } from "react-router-dom";
import type { CSSProperties } from "react";
import type { SubmitEvent } from "react";
import { useEffect, useId, useRef, useState } from "react";
import { withSearch } from "../model/search-params";
type NavBoxProps = {
  homeHref?: string;
  aboutHref?: string;
  categoriesHref?: string;
  latestHref?: string;
   className?: string;

  onSearch?: (value: string) => void;
};

export function NavBox({
  homeHref = "/",
  aboutHref = "/about",
  latestHref = "/?sort=latest",
   className,

}: NavBoxProps) {
  const {data:categories} = useCategories()
  const [view, setView] = useState<"navigation" | "categories">("navigation");
  const location = useLocation()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const appliedSearch = searchParams.get("search") ?? "";
  const categoriesId = useId();
  const categoriesButton = useRef<HTMLButtonElement>(null);
  const backButton = useRef<HTMLButtonElement>(null);

  const previousView = useRef(view);
  useEffect(() => {
    if (view === "categories") {
      backButton.current?.focus({ preventScroll: true });
    } else if (previousView.current === "categories") {
      categoriesButton.current?.focus({ preventScroll: true });
    }
    previousView.current = view;
  }, [view]);

  function closeCategories() {
    setView("navigation");
  }

  function showResults(params: URLSearchParams) {
    const query = params.toString();
    navigate(query ? `/?${query}` : "/");
  }

  function clearSearch() {
    showResults(withSearch(returnPathFilter(), ""));
  }


  function returnPathFilter(){
    let params = new URLSearchParams()
    setView("navigation")
    if(location.pathname==="/"){
      params = new URLSearchParams(searchParams)

    }
    return params
  }
  function handleCategorieFilter(slug:string){
    const params = returnPathFilter()
    params.set("category",slug)
    return navigate(`/?${params}`)
  }
  function handleSearchFilter(e: SubmitEvent<HTMLFormElement>){
    e.preventDefault()
    const value = new FormData(e.currentTarget).get("search");
    showResults(withSearch(returnPathFilter(), String(value ?? "")));
  }


  return (
    <nav className={[
    styles.navBox,
    className,
  ]
    .filter(Boolean)
    .join(" ")}
  aria-label="Main navigation"
  onKeyDown={(event) => {
    if (event.key === "Escape" && view === "categories") closeCategories();
  }}
>
      <div className={styles.glow} />

      <div className={styles.navViewport}>
        <div
          className={[
            styles.navTrack,
            view === "categories"
              ? styles.showCategories
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {/* TELA 1 - NAV NORMAL */}
          <div
            className={[
              styles.navScreen,
              styles.navigationScreen,
            ].join(" ")}
            inert={view !== "navigation"}
            aria-hidden={view !== "navigation"}
          >
            <div className={styles.navigation}>
              {/* todo o conteúdo atual da navigation */}
                        <Link
          to={homeHref}
          className={`${styles.home} ${styles.navigationItem}`}
          aria-label="Go to home"
        >
          <img
            src={logo}
            alt=""
            className={styles.homeLogo}
          />
        </Link>

        <span className={styles.separator} />

        {/* ABOUT */}
        <Link to={aboutHref} className={styles.navigationItem}>
          <span className={styles.icon} aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 10.5v6" />
              <path d="M12 7.5h.01" />
            </svg>
          </span>

          <span className={styles.label}>About</span>
        </Link>

        <span className={styles.separator} />

        {/* CATEGORIES */}
        <button
          type="button"
          className={styles.navigationItem}
          onClick={() => {setView("categories")}}
          ref={categoriesButton}
          aria-expanded={view === "categories"}
          aria-controls={categoriesId}
        >
          <span className={styles.icon} aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <rect x="4" y="4" width="6" height="6" rx="1" />
              <rect x="14" y="4" width="6" height="6" rx="1" />
              <rect x="4" y="14" width="6" height="6" rx="1" />
              <rect x="14" y="14" width="6" height="6" rx="1" />
            </svg>
          </span>
          <span className={styles.label}>
            Categories
          </span>
        </button>



        <span className={styles.separator} />

        {/* LATEST */}
        <Link to={latestHref} className={styles.navigationItem}>
          <span className={styles.icon} aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3.5 2" />
            </svg>
          </span>

          <span className={styles.label}>Latest</span>
        </Link>
              {/* Categories continua sendo button */}
            </div>

            <form
              className={styles.search}
              onSubmit={handleSearchFilter}
            >
              <input
          type="search"
          name="search"
          placeholder="Search articles..."
          aria-label="Search articles"
          key={`${location.key}:${appliedSearch}`}
          defaultValue={appliedSearch}
        />

        {appliedSearch && (
          <button type="button" onClick={clearSearch} aria-label="Clear search" title="Clear search">
            <span aria-hidden="true">×</span>
          </button>
        )}
        <button
          type="submit"
          aria-label="Search"
        >
          <IconSearch />
        </button>
            </form>
          </div>
{

}
          {/* TELA 2 - CATEGORIES */}
          <div
            className={[
              styles.navScreen,
              styles.categoriesScreen,
            ].join(" ")}
            id={categoriesId}
            inert={view !== "categories"}
            aria-hidden={view !== "categories"}
          >
            <div className={styles.categoriesHeader}>
              <button
                type="button"
                className={styles.backButton}
                ref={backButton}
                onClick={closeCategories}
              >
                ← Categories
              </button>
            </div>

            <div className={styles.categoryGrid}>
              {categories?.map((category) => {
  const categoryStyle = {
    "--category-item-color": category.color,
  } as CSSProperties;

  return (
    <button
      key={category.slug}
            type="button"
            className={styles.categoryItem}
            style={categoryStyle}
            onClick={()=>handleCategorieFilter(category.slug)}
          >
            <span className={styles.categoryIndicator} />

            <span className={styles.categoryName}>
              {category.title}
            </span>
          </button>
        );
      })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" width="100" height="100">
  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none" />

  <path d="M 15.6 15.6 L 23 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
</svg>
  );
}
