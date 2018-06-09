<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class NotesController extends Controller
{
    /**
     * @Route("/notes", name="notes")
     */
    public function index()
    {
        return $this->render('notes/index.html.twig', [
            'controller_name' => 'NotesController',
        ]);
    }
}
