--
-- PostgreSQL database dump
--

-- Dumped from database version 13.11 (Ubuntu 13.11-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.4 (Ubuntu 15.4-0ubuntu0.23.04.1)

-- Started on 2023-08-20 19:03:36 -03

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
<<<<<<< HEAD
-- TOC entry 25 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
=======
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

-- *not* creating schema, since initdb creates it


<<<<<<< HEAD
--
-- TOC entry 15 (class 3079 OID 17161)
=======
ALTER SCHEMA public OWNER TO postgres;

--
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
-- Name: btree_gin; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS btree_gin WITH SCHEMA public;


--
<<<<<<< HEAD
-- TOC entry 4137 (class 0 OID 0)
-- Dependencies: 15
-- Name: EXTENSION btree_gin; Type: COMMENT; Schema: -; Owner: -
=======
-- Name: EXTENSION btree_gin; Type: COMMENT; Schema: -; Owner: 
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

COMMENT ON EXTENSION btree_gin IS 'support for indexing common datatypes in GIN';


--
<<<<<<< HEAD
-- TOC entry 19 (class 3079 OID 17702)
=======
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
-- Name: btree_gist; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS btree_gist WITH SCHEMA public;


--
<<<<<<< HEAD
-- TOC entry 4138 (class 0 OID 0)
-- Dependencies: 19
-- Name: EXTENSION btree_gist; Type: COMMENT; Schema: -; Owner: -
=======
-- Name: EXTENSION btree_gist; Type: COMMENT; Schema: -; Owner: 
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

COMMENT ON EXTENSION btree_gist IS 'support for indexing common datatypes in GiST';


--
<<<<<<< HEAD
-- TOC entry 8 (class 3079 OID 16671)
=======
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
-- Name: citext; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;


--
<<<<<<< HEAD
-- TOC entry 4139 (class 0 OID 0)
-- Dependencies: 8
-- Name: EXTENSION citext; Type: COMMENT; Schema: -; Owner: -
=======
-- Name: EXTENSION citext; Type: COMMENT; Schema: -; Owner: 
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';


--
<<<<<<< HEAD
-- TOC entry 17 (class 3079 OID 17599)
=======
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
-- Name: cube; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS cube WITH SCHEMA public;


--
<<<<<<< HEAD
-- TOC entry 4140 (class 0 OID 0)
-- Dependencies: 17
-- Name: EXTENSION cube; Type: COMMENT; Schema: -; Owner: -
=======
-- Name: EXTENSION cube; Type: COMMENT; Schema: -; Owner: 
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

COMMENT ON EXTENSION cube IS 'data type for multidimensional cubes';


--
<<<<<<< HEAD
-- TOC entry 2 (class 3079 OID 16384)
=======
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
-- Name: dblink; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS dblink WITH SCHEMA public;


--
<<<<<<< HEAD
-- TOC entry 4141 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION dblink; Type: COMMENT; Schema: -; Owner: -
=======
-- Name: EXTENSION dblink; Type: COMMENT; Schema: -; Owner: 
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

COMMENT ON EXTENSION dblink IS 'connect to other PostgreSQL databases from within a database';


--
<<<<<<< HEAD
-- TOC entry 14 (class 3079 OID 17152)
=======
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
-- Name: dict_int; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS dict_int WITH SCHEMA public;


--
<<<<<<< HEAD
-- TOC entry 4142 (class 0 OID 0)
-- Dependencies: 14
-- Name: EXTENSION dict_int; Type: COMMENT; Schema: -; Owner: -
=======
-- Name: EXTENSION dict_int; Type: COMMENT; Schema: -; Owner: 
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

COMMENT ON EXTENSION dict_int IS 'text search dictionary template for integers';


--
<<<<<<< HEAD
-- TOC entry 20 (class 3079 OID 18325)
=======
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
-- Name: dict_xsyn; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS dict_xsyn WITH SCHEMA public;


--
<<<<<<< HEAD
-- TOC entry 4143 (class 0 OID 0)
-- Dependencies: 20
-- Name: EXTENSION dict_xsyn; Type: COMMENT; Schema: -; Owner: -
=======
-- Name: EXTENSION dict_xsyn; Type: COMMENT; Schema: -; Owner: 
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

COMMENT ON EXTENSION dict_xsyn IS 'text search dictionary template for extended synonym processing';


--
<<<<<<< HEAD
-- TOC entry 18 (class 3079 OID 17686)
=======
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
-- Name: earthdistance; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS earthdistance WITH SCHEMA public;


--
<<<<<<< HEAD
-- TOC entry 4144 (class 0 OID 0)
-- Dependencies: 18
-- Name: EXTENSION earthdistance; Type: COMMENT; Schema: -; Owner: -
=======
-- Name: EXTENSION earthdistance; Type: COMMENT; Schema: -; Owner: 
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

COMMENT ON EXTENSION earthdistance IS 'calculate great-circle distances on the surface of the Earth';


--
<<<<<<< HEAD
-- TOC entry 7 (class 3079 OID 16660)
=======
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
-- Name: fuzzystrmatch; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS fuzzystrmatch WITH SCHEMA public;


--
<<<<<<< HEAD
-- TOC entry 4145 (class 0 OID 0)
-- Dependencies: 7
-- Name: EXTENSION fuzzystrmatch; Type: COMMENT; Schema: -; Owner: -
=======
-- Name: EXTENSION fuzzystrmatch; Type: COMMENT; Schema: -; Owner: 
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

COMMENT ON EXTENSION fuzzystrmatch IS 'determine similarities and distance between strings';


--
<<<<<<< HEAD
-- TOC entry 13 (class 3079 OID 17025)
=======
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
-- Name: hstore; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS hstore WITH SCHEMA public;


--
<<<<<<< HEAD
-- TOC entry 4146 (class 0 OID 0)
-- Dependencies: 13
-- Name: EXTENSION hstore; Type: COMMENT; Schema: -; Owner: -
=======
-- Name: EXTENSION hstore; Type: COMMENT; Schema: -; Owner: 
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

COMMENT ON EXTENSION hstore IS 'data type for storing sets of (key, value) pairs';


--
<<<<<<< HEAD
-- TOC entry 12 (class 3079 OID 16903)
=======
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
-- Name: intarray; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS intarray WITH SCHEMA public;


--
<<<<<<< HEAD
-- TOC entry 4147 (class 0 OID 0)
-- Dependencies: 12
-- Name: EXTENSION intarray; Type: COMMENT; Schema: -; Owner: -
=======
-- Name: EXTENSION intarray; Type: COMMENT; Schema: -; Owner: 
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

COMMENT ON EXTENSION intarray IS 'functions, operators, and index support for 1-D arrays of integers';


--
<<<<<<< HEAD
-- TOC entry 4 (class 3079 OID 16444)
=======
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
-- Name: ltree; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS ltree WITH SCHEMA public;


--
<<<<<<< HEAD
-- TOC entry 4148 (class 0 OID 0)
-- Dependencies: 4
-- Name: EXTENSION ltree; Type: COMMENT; Schema: -; Owner: -
=======
-- Name: EXTENSION ltree; Type: COMMENT; Schema: -; Owner: 
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

COMMENT ON EXTENSION ltree IS 'data type for hierarchical tree-like structures';


--
<<<<<<< HEAD
-- TOC entry 22 (class 3079 OID 18337)
=======
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
-- Name: pg_stat_statements; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_stat_statements WITH SCHEMA public;


--
<<<<<<< HEAD
-- TOC entry 4149 (class 0 OID 0)
-- Dependencies: 22
-- Name: EXTENSION pg_stat_statements; Type: COMMENT; Schema: -; Owner: -
=======
-- Name: EXTENSION pg_stat_statements; Type: COMMENT; Schema: -; Owner: 
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

COMMENT ON EXTENSION pg_stat_statements IS 'track planning and execution statistics of all SQL statements executed';


--
<<<<<<< HEAD
-- TOC entry 11 (class 3079 OID 16824)
=======
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
-- Name: pg_trgm; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;


--
<<<<<<< HEAD
-- TOC entry 4150 (class 0 OID 0)
-- Dependencies: 11
-- Name: EXTENSION pg_trgm; Type: COMMENT; Schema: -; Owner: -
=======
-- Name: EXTENSION pg_trgm; Type: COMMENT; Schema: -; Owner: 
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

COMMENT ON EXTENSION pg_trgm IS 'text similarity measurement and index searching based on trigrams';


--
<<<<<<< HEAD
-- TOC entry 10 (class 3079 OID 16787)
=======
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
<<<<<<< HEAD
-- TOC entry 4151 (class 0 OID 0)
-- Dependencies: 10
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: -
=======
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
<<<<<<< HEAD
-- TOC entry 16 (class 3079 OID 17597)
=======
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
-- Name: pgrowlocks; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgrowlocks WITH SCHEMA public;


--
<<<<<<< HEAD
-- TOC entry 4152 (class 0 OID 0)
-- Dependencies: 16
-- Name: EXTENSION pgrowlocks; Type: COMMENT; Schema: -; Owner: -
=======
-- Name: EXTENSION pgrowlocks; Type: COMMENT; Schema: -; Owner: 
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

COMMENT ON EXTENSION pgrowlocks IS 'show row-level locking information';


--
<<<<<<< HEAD
-- TOC entry 5 (class 3079 OID 16629)
=======
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
-- Name: pgstattuple; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgstattuple WITH SCHEMA public;


--
<<<<<<< HEAD
-- TOC entry 4153 (class 0 OID 0)
-- Dependencies: 5
-- Name: EXTENSION pgstattuple; Type: COMMENT; Schema: -; Owner: -
=======
-- Name: EXTENSION pgstattuple; Type: COMMENT; Schema: -; Owner: 
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

COMMENT ON EXTENSION pgstattuple IS 'show tuple-level statistics';


--
<<<<<<< HEAD
-- TOC entry 6 (class 3079 OID 16639)
=======
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
-- Name: tablefunc; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS tablefunc WITH SCHEMA public;


--
<<<<<<< HEAD
-- TOC entry 4154 (class 0 OID 0)
-- Dependencies: 6
-- Name: EXTENSION tablefunc; Type: COMMENT; Schema: -; Owner: -
=======
-- Name: EXTENSION tablefunc; Type: COMMENT; Schema: -; Owner: 
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

COMMENT ON EXTENSION tablefunc IS 'functions that manipulate whole tables, including crosstab';


--
<<<<<<< HEAD
-- TOC entry 21 (class 3079 OID 18330)
=======
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
-- Name: unaccent; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS unaccent WITH SCHEMA public;


--
<<<<<<< HEAD
-- TOC entry 4155 (class 0 OID 0)
-- Dependencies: 21
-- Name: EXTENSION unaccent; Type: COMMENT; Schema: -; Owner: -
=======
-- Name: EXTENSION unaccent; Type: COMMENT; Schema: -; Owner: 
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

COMMENT ON EXTENSION unaccent IS 'text search dictionary that removes accents';


--
<<<<<<< HEAD
-- TOC entry 9 (class 3079 OID 16776)
=======
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
<<<<<<< HEAD
-- TOC entry 4156 (class 0 OID 0)
-- Dependencies: 9
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: -
=======
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
<<<<<<< HEAD
-- TOC entry 3 (class 3079 OID 16430)
=======
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
-- Name: xml2; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS xml2 WITH SCHEMA public;


--
<<<<<<< HEAD
-- TOC entry 4157 (class 0 OID 0)
-- Dependencies: 3
-- Name: EXTENSION xml2; Type: COMMENT; Schema: -; Owner: -
=======
-- Name: EXTENSION xml2; Type: COMMENT; Schema: -; Owner: 
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

COMMENT ON EXTENSION xml2 IS 'XPath querying and XSLT';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
<<<<<<< HEAD
-- TOC entry 233 (class 1259 OID 193290)
-- Name: likes; Type: TABLE; Schema: public; Owner: -
=======
-- Name: likes; Type: TABLE; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

CREATE TABLE public.likes (
    "userId" integer NOT NULL,
    "postId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


<<<<<<< HEAD
--
-- TOC entry 232 (class 1259 OID 193275)
-- Name: posts; Type: TABLE; Schema: public; Owner: -
=======
ALTER TABLE public.likes OWNER TO oozhgvvy;

--
-- Name: posts; Type: TABLE; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "articleUrl" text NOT NULL,
    post text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


<<<<<<< HEAD
--
-- TOC entry 231 (class 1259 OID 193273)
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
=======
ALTER TABLE public.posts OWNER TO oozhgvvy;

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


<<<<<<< HEAD
--
-- TOC entry 4158 (class 0 OID 0)
-- Dependencies: 231
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
=======
ALTER TABLE public.posts_id_seq OWNER TO oozhgvvy;

--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
<<<<<<< HEAD
-- TOC entry 234 (class 1259 OID 193304)
-- Name: posttrend; Type: TABLE; Schema: public; Owner: -
=======
-- Name: posttrend; Type: TABLE; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

CREATE TABLE public.posttrend (
    "postId" integer NOT NULL,
    "trendId" integer NOT NULL
);


<<<<<<< HEAD
--
-- TOC entry 230 (class 1259 OID 193261)
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
=======
ALTER TABLE public.posttrend OWNER TO oozhgvvy;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

CREATE TABLE public.sessions (
    "userId" integer NOT NULL,
    token text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


<<<<<<< HEAD
--
-- TOC entry 229 (class 1259 OID 109598)
-- Name: trends; Type: TABLE; Schema: public; Owner: -
=======
ALTER TABLE public.sessions OWNER TO oozhgvvy;

--
-- Name: trends; Type: TABLE; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

CREATE TABLE public.trends (
    id integer NOT NULL,
    trend text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


<<<<<<< HEAD
--
-- TOC entry 228 (class 1259 OID 109596)
-- Name: trends_id_seq; Type: SEQUENCE; Schema: public; Owner: -
=======
ALTER TABLE public.trends OWNER TO oozhgvvy;

--
-- Name: trends_id_seq; Type: SEQUENCE; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

CREATE SEQUENCE public.trends_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


<<<<<<< HEAD
--
-- TOC entry 4159 (class 0 OID 0)
-- Dependencies: 228
-- Name: trends_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
=======
ALTER TABLE public.trends_id_seq OWNER TO oozhgvvy;

--
-- Name: trends_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

ALTER SEQUENCE public.trends_id_seq OWNED BY public.trends.id;


--
<<<<<<< HEAD
-- TOC entry 227 (class 1259 OID 109534)
-- Name: users; Type: TABLE; Schema: public; Owner: -
=======
-- Name: users; Type: TABLE; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    username text NOT NULL,
    picture text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


<<<<<<< HEAD
--
-- TOC entry 226 (class 1259 OID 109532)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
=======
ALTER TABLE public.users OWNER TO oozhgvvy;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


<<<<<<< HEAD
--
-- TOC entry 4160 (class 0 OID 0)
-- Dependencies: 226
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
=======
ALTER TABLE public.users_id_seq OWNER TO oozhgvvy;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
<<<<<<< HEAD
-- TOC entry 3982 (class 2604 OID 193278)
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: -
=======
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
<<<<<<< HEAD
-- TOC entry 3979 (class 2604 OID 109601)
-- Name: trends id; Type: DEFAULT; Schema: public; Owner: -
=======
-- Name: trends id; Type: DEFAULT; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

ALTER TABLE ONLY public.trends ALTER COLUMN id SET DEFAULT nextval('public.trends_id_seq'::regclass);


--
<<<<<<< HEAD
-- TOC entry 3977 (class 2604 OID 109537)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
=======
-- Name: users id; Type: DEFAULT; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
<<<<<<< HEAD
-- TOC entry 3994 (class 2606 OID 193284)
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
=======
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: oozhgvvy
--

COPY public.likes ("userId", "postId", "createdAt") FROM stdin;
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: oozhgvvy
--

COPY public.posts (id, "userId", "articleUrl", post, "createdAt") FROM stdin;
1	12	https://www.youtube.com/	plataforma para ver vídeos #irado	2023-08-20 21:57:52.435381
6	7	https://github.com	plataforma gostosinha que me da raiva #git	2023-08-21 00:34:03.098323
\.


--
-- Data for Name: posttrend; Type: TABLE DATA; Schema: public; Owner: oozhgvvy
--

COPY public.posttrend ("postId", "trendId") FROM stdin;
\.


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: oozhgvvy
--

COPY public.sessions ("userId", token, "createdAt") FROM stdin;
12	e65b4c99-61e9-4625-8de9-7f8357e9cd4d	2023-08-20 21:45:09.919272
7	99433423-b306-4db4-90dd-6a844e401d5d	2023-08-21 00:18:26.521526
\.


--
-- Data for Name: trends; Type: TABLE DATA; Schema: public; Owner: oozhgvvy
--

COPY public.trends (id, trend, "createdAt") FROM stdin;
7	#top	2023-08-20 19:26:24.837349
14	#git	2023-08-21 00:34:03.780306
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: oozhgvvy
--

COPY public.users (id, email, password, username, picture, "createdAt") FROM stdin;
7	luis@gmail.com	$2b$10$YOe7iJ9wvOobBrhb/pVvre5HgwP405D997YnqCmIIsDNktyb.BITm	Luis Arthur	data:image/jpeg;base64,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	2023-08-16 00:03:07.572777
8	heloisa@driven.com	$2b$10$CitUJm83BZa50f1vws5CUunX8jGBJ7yTlGHRccSgJcp13zYjieLp2	heloisa	https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png	2023-08-16 21:32:14.41889
9	lucasocteixeira@gmail.com	$2b$10$2b5l7/09VsL4KuDUAzxtw.slGOywYTnUDglPCEhLxxNG2LU94zmoi	lucas	data:image/jpeg;base64,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	2023-08-16 22:22:02.418788
10	caio@caio.com	$2b$10$cnQv3/up2QqMqw3vptfufOi5Af9VnQqyFmGhdoZThF4v36v9/mBwq	caio	https://aquitemplacas.com.br/img/produtos/g/36-atencao-area-de-teste.jpg	2023-08-16 23:08:31.607755
11	helio@driven.com	$2b$10$PZgauPQve140BAQN8lhDP.wZEC.Wy6t.K1RPG3InoH4oddwczZGeG	helio	https://s2.glbimg.com/cf5ai6eSqGnBJswbafOC0FGLNJw=/620x466/smart/e.glbimg.com/og/ed/f/original/2020/08/13/dougshamburgueria.jpg	2023-08-17 22:23:18.230419
12	lucas@gmail.com	$2b$10$h3tb5L2X4Zg1r9MGioFo/./Ba7xBmvRc73oXl4XktpiO5zjAq8NDy	lucas132	https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ	2023-08-18 20:59:04.028009
\.


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: oozhgvvy
--

SELECT pg_catalog.setval('public.posts_id_seq', 6, true);


--
-- Name: trends_id_seq; Type: SEQUENCE SET; Schema: public; Owner: oozhgvvy
--

SELECT pg_catalog.setval('public.trends_id_seq', 14, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: oozhgvvy
--

SELECT pg_catalog.setval('public.users_id_seq', 12, true);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
<<<<<<< HEAD
-- TOC entry 3990 (class 2606 OID 109607)
-- Name: trends trends_pkey; Type: CONSTRAINT; Schema: public; Owner: -
=======
-- Name: trends trends_pkey; Type: CONSTRAINT; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

ALTER TABLE ONLY public.trends
    ADD CONSTRAINT trends_pkey PRIMARY KEY (id);


--
<<<<<<< HEAD
-- TOC entry 3986 (class 2606 OID 109633)
-- Name: users uc_email; Type: CONSTRAINT; Schema: public; Owner: -
=======
-- Name: users uc_email; Type: CONSTRAINT; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT uc_email UNIQUE (email);


--
<<<<<<< HEAD
-- TOC entry 3992 (class 2606 OID 155577)
-- Name: trends uniq; Type: CONSTRAINT; Schema: public; Owner: -
=======
-- Name: trends uniq; Type: CONSTRAINT; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

ALTER TABLE ONLY public.trends
    ADD CONSTRAINT uniq UNIQUE (trend);


--
<<<<<<< HEAD
-- TOC entry 3988 (class 2606 OID 109543)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
=======
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
<<<<<<< HEAD
-- TOC entry 3997 (class 2606 OID 193299)
-- Name: likes likes_postId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
=======
-- Name: likes likes_postId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT "likes_postId_fkey" FOREIGN KEY ("postId") REFERENCES public.posts(id) ON DELETE CASCADE;


--
<<<<<<< HEAD
-- TOC entry 3998 (class 2606 OID 193294)
-- Name: likes likes_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
=======
-- Name: likes likes_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT "likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON DELETE CASCADE;


--
<<<<<<< HEAD
-- TOC entry 3996 (class 2606 OID 193285)
-- Name: posts posts_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
=======
-- Name: posts posts_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT "posts_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON DELETE CASCADE;


--
<<<<<<< HEAD
-- TOC entry 3999 (class 2606 OID 193307)
-- Name: posttrend posttrend_postId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
=======
-- Name: posttrend posttrend_postId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

ALTER TABLE ONLY public.posttrend
    ADD CONSTRAINT "posttrend_postId_fkey" FOREIGN KEY ("postId") REFERENCES public.posts(id) ON DELETE CASCADE;


--
<<<<<<< HEAD
-- TOC entry 4000 (class 2606 OID 193312)
-- Name: posttrend posttrend_trendId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
=======
-- Name: posttrend posttrend_trendId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

ALTER TABLE ONLY public.posttrend
    ADD CONSTRAINT "posttrend_trendId_fkey" FOREIGN KEY ("trendId") REFERENCES public.trends(id) ON DELETE CASCADE;


--
<<<<<<< HEAD
-- TOC entry 3995 (class 2606 OID 193268)
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
=======
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: oozhgvvy
>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON DELETE CASCADE;


<<<<<<< HEAD
-- Completed on 2023-08-20 19:04:00 -03
=======
--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;

>>>>>>> c85685763e9e888a2e89afdc2896557579bfb9a2

--
-- PostgreSQL database dump complete
--

