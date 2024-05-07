import { Link, NavLink } from 'react-router-dom';
import {
  StyledHeader,
  StyledInner,
  StyledList,
  StyledListItem,
} from './styled-components';
import { routes } from '@/shared';

export default function Header() {
  return (
    <StyledHeader>
      <StyledInner>
        <Link to="/">로고</Link>
        <nav>
          <StyledList>
            <StyledListItem>
              <NavLink to={routes.plan.path}>{routes.plan.navTitle}</NavLink>
            </StyledListItem>
            <StyledListItem>
              <NavLink to={routes.around.path}>
                {routes.around.navTitle}
              </NavLink>
            </StyledListItem>
            <StyledListItem>
              <NavLink to={routes.community.path}>
                {routes.community.navTitle}
              </NavLink>
            </StyledListItem>
          </StyledList>
        </nav>
        <div>로그인</div>
      </StyledInner>
    </StyledHeader>
  );
}
