/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

export default function NavBar() {
  const { user } = useAuth();

  console.warn(user);

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <Link passHref href="/">
          <a className="navbar-brand">
            HOME
          </a>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link passHref href="/posts">
                <a className="nav-link">
                  All Posts
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link passHref href="/myposts">
                <a className="nav-link">
                  My Posts
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link passHref href="/categories">
                <a className="nav-link">
                  Category Manager
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link passHref href="/tags">
                <a className="nav-link">
                  Tag Manager
                </a>
              </Link>
            </li>

            <button type="button" className="btn btn-danger" onClick={signOut}>
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
