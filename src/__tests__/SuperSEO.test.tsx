import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { SuperSEO, SuperSEOProps } from '../components/SuperSEO';

function renderComponent(props: SuperSEOProps, children: React.ReactNode = undefined): RenderResult {
  return render(<SuperSEO {...props}>{children}</SuperSEO>);
}

describe('SuperSEO', () => {
  test('should render without crashing', async () => {
    const props: SuperSEOProps = { title: 'Test', description: 'Testing SEO component' };
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
