import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { SuperSEO, SuperSEOProps } from '../components/SuperSEO';

// Learn how to test React components:
// https://testing-library.com/docs/react-testing-library/intro

function renderComponent(props: SuperSEOProps, children: any = undefined): RenderResult {
  return render(<SuperSEO {...props}>{children}</SuperSEO>);
}

describe('SuperSEO', () => {
  test('should render without crashing', async () => {
    const props: SuperSEOProps = { title: 'Test', description: 'Testing SEO component' };
    const children: any = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
