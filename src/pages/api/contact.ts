import type { APIRoute } from 'astro'
import { Resend } from 'resend'

const contactTemplateId =
  import.meta.env.RESEND_CONTACT_TEMPLATE_ID ?? 'welcome-email'

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData()

  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name || !email || !message) {
    return Response.json(
      { message: 'Completa todos los campos para enviar el mensaje.' },
      { status: 400 },
    )
  }

  if (!isValidEmail(email)) {
    return Response.json(
      { message: 'Ingresa un correo electrónico válido.' },
      { status: 400 },
    )
  }

  if (
    !import.meta.env.RESEND_API_KEY ||
    !import.meta.env.CONTACT_TO_EMAIL ||
    !import.meta.env.RESEND_FROM_EMAIL
  ) {
    return Response.json(
      { message: 'El formulario de contacto no está configurado todavía.' },
      { status: 500 },
    )
  }

  const resend = new Resend(import.meta.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    from: import.meta.env.RESEND_FROM_EMAIL,
    to: [import.meta.env.CONTACT_TO_EMAIL],
    subject: `Nuevo mensaje de ${name} desde el formulario de contacto`,
    replyTo: email,
    template: {
      id: contactTemplateId,
      variables: {
        name,
        email,
        message,
        company_name: 'https://www.jesuschacon.dev/',
      },
    },
  })

  if (error) {
    return Response.json(
      { message: 'No se pudo enviar el mensaje. Inténtalo nuevamente.' },
      { status: 500 },
    )
  }

  return Response.json({ message: 'Mensaje enviado correctamente.' })
}
